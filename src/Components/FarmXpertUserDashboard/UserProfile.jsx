import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Typography, Avatar, Paper, Button, Divider, IconButton,
  Grid, TextField, Badge
} from '@mui/material';
import {
  Edit, Logout, DarkMode, LightMode, CameraAlt,
  Agriculture, Grass, LocalFlorist, Terrain, Water
} from '@mui/icons-material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const NatureBackground = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  padding: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(3px)',
  }
}));

const ProfileContainer = styled(Paper)(({ theme, darkmode }) => ({
  maxWidth: '700px',
  width: '100%',
  margin: '2rem auto',
  padding: '2.5rem',
  borderRadius: '24px',
  boxShadow: darkmode
    ? '0 15px 35px rgba(0, 0, 0, 0.5)'
    : '0 15px 40px rgba(46, 125, 50, 0.25)',
  background: darkmode
    ? 'linear-gradient(145deg, #121212 0%, #1e1e1e 100%)'
    : 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(245,247,250,0.98) 100%)',
  color: darkmode ? '#e0e0e0' : '#2e7d32',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.4s ease',
  border: darkmode 
    ? '1px solid rgba(100, 221, 23, 0.2)'
    : '1px solid rgba(76, 175, 80, 0.2)',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '8px',
    background: darkmode
      ? 'linear-gradient(90deg, #64dd17, #1de9b6)'
      : 'linear-gradient(90deg, #4caf50, #8bc34a, #cddc39)',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: '-100px',
    right: '-100px',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: darkmode 
      ? 'radial-gradient(circle, rgba(100, 221, 23, 0.1) 0%, rgba(0,0,0,0) 70%)'
      : 'radial-gradient(circle, rgba(76, 175, 80, 0.1) 0%, rgba(0,0,0,0) 70%)',
    zIndex: 0,
  }
}));

const ProfileAvatar = styled(Avatar)(({ theme, darkmode }) => ({
  width: '110px',
  height: '110px',
  marginRight: '1.5rem',
  border: darkmode ? '4px solid #64dd17' : '4px solid #4caf50',
  boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)'
  }
}));

const FarmSection = styled(Box)(({ theme, darkmode }) => ({
  background: darkmode 
    ? 'rgba(30, 30, 30, 0.5)'
    : 'rgba(76, 175, 80, 0.08)',
  borderRadius: '16px',
  padding: '1.5rem',
  margin: '2rem 0',
  border: darkmode 
    ? '1px solid rgba(100, 221, 23, 0.3)' 
    : '1px solid rgba(76, 175, 80, 0.25)',
  backdropFilter: 'blur(5px)',
  position: 'relative',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '5px',
    height: '100%',
    background: darkmode 
      ? 'linear-gradient(to bottom, #64dd17, #1de9b6)'
      : 'linear-gradient(to bottom, #4caf50, #8bc34a)',
  }
}));

const GlowingButton = styled(Button)(({ theme, darkmode }) => ({
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: darkmode 
      ? '0 5px 15px rgba(100, 221, 23, 0.4)' 
      : '0 5px 15px rgba(76, 175, 80, 0.4)',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '5px',
    height: '5px',
    background: 'rgba(255, 255, 255, 0.5)',
    opacity: 0,
    borderRadius: '100%',
    transform: 'scale(1, 1) translate(-50%)',
    transformOrigin: '50% 50%',
  },
  '&:focus:after': {
    animation: 'ripple 1s ease-out',
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(0, 0)',
      opacity: 0.5,
    },
    '100%': {
      transform: 'scale(20, 20)',
      opacity: 0,
    },
  }
}));

const FarmXpertProfile = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [profileImg, setProfileImg] = useState(null);
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    age: '',
    gender: '',
    password: '',
    farmData: {
      crops: [],
      landSize: '',
      irrigation: '',
      soilType: ''
    }
  });

  useEffect(() => {
    // Load user data from localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      // Ensure farmData exists
      if (!currentUser.farmData) {
        currentUser.farmData = {
          crops: [],
          landSize: '',
          irrigation: '',
          soilType: ''
        };
      }
      setUserData(currentUser);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImg(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleEditMode = () => setEditMode(!editMode);

  const handleChange = (field, value) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  const handleFarmChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      farmData: {
        ...prev.farmData,
        [field]: value
      }
    }));
  };

  const handleSaveProfile = () => {
    // Save updated profile to localStorage
    localStorage.setItem('currentUser', JSON.stringify(userData));
    alert('Profile updated successfully!');
    setEditMode(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  const renderName = () => {
    return `${userData.firstname} ${userData.lastname}`.trim() || 'FarmXpert User';
  };

  return (
    <NatureBackground>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ProfileContainer elevation={3} darkmode={darkMode ? 1 : 0}>
          <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 1 }}>
            <IconButton 
              onClick={toggleDarkMode} 
              color="inherit"
              sx={{
                backgroundColor: darkMode ? 'rgba(100, 221, 23, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  backgroundColor: darkMode ? 'rgba(100, 221, 23, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                }
              }}
            >
              {darkMode ? <LightMode sx={{ color: '#ffeb3b' }} /> : <DarkMode />}
            </IconButton>
          </Box>

          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 3,
            position: 'relative',
            zIndex: 1
          }}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <IconButton 
                  component="label" 
                  size="small" 
                  sx={{
                    bgcolor: darkMode ? '#64dd17' : '#4caf50',
                    '&:hover': { 
                      bgcolor: darkMode ? '#56c11b' : '#3d8b40',
                      transform: 'scale(1.1)'
                    },
                    transition: 'all 0.2s ease'
                  }}
                >
                  <CameraAlt sx={{ color: 'white', fontSize: '16px' }} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                  />
                </IconButton>
              }
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ProfileAvatar
                  src={profileImg}
                  alt={renderName()}
                  darkmode={darkMode ? 1 : 0}
                >
                  {renderName().split(' ').map(n => n[0]).join('')}
                </ProfileAvatar>
              </motion.div>
            </Badge>
            <Box>
              <Typography 
                variant="h4" 
                fontWeight="bold" 
                color={darkMode ? '#64dd17' : '#2e7d32'} 
                sx={{ 
                  mb: 0.5,
                  textShadow: darkMode ? '0 2px 4px rgba(0,0,0,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                {renderName()}
              </Typography>
              <Typography 
                variant="subtitle2" 
                color={darkMode ? '#b0bec5' : '#689f38'}
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Box 
                  component="span" 
                  sx={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    bgcolor: darkMode ? '#64dd17' : '#4caf50',
                    mr: 1
                  }}
                />
                FarmXpert Member
              </Typography>
            </Box>
          </Box>

          <Divider 
            sx={{ 
              my: 2, 
              borderColor: darkMode ? 'rgba(100, 221, 23, 0.3)' : 'rgba(76, 175, 80, 0.3)',
              position: 'relative',
              zIndex: 1
            }} 
          />

          <Typography 
            variant="h6" 
            sx={{ 
              mb: 2, 
              color: darkMode ? '#64dd17' : '#4caf50',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1
            }}
          >
            <Box 
              component="span" 
              sx={{
                display: 'inline-block',
                width: '24px',
                height: '24px',
                borderRadius: '4px',
                bgcolor: darkMode ? 'rgba(100, 221, 23, 0.2)' : 'rgba(76, 175, 80, 0.2)',
                mr: 1.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              👤
            </Box>
            Personal Information
          </Typography>

          {editMode ? (
            <Grid container spacing={2} sx={{ position: 'relative', zIndex: 1 }}>
              {Object.entries(userData)
                .filter(([key]) => key !== 'farmData' && key !== 'password')
                .map(([key, value]) => (
                  <Grid item xs={12} sm={6} key={key}>
                    <TextField
                      label={key.charAt(0).toUpperCase() + key.slice(1)}
                      value={value}
                      onChange={(e) => handleChange(key, e.target.value)}
                      fullWidth
                      size="small"
                      sx={{ mb: 2 }}
                      InputProps={{
                        sx: {
                          borderRadius: '8px',
                          backgroundColor: darkMode ? 'rgba(50, 50, 50, 0.5)' : 'rgba(0,0,0,0.03)',
                          color: darkMode ? '#e0e0e0' : 'inherit',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: darkMode ? 'rgba(100, 221, 23, 0.3)' : 'rgba(0, 0, 0, 0.23)',
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: darkMode ? '#64dd17' : '#4caf50',
                          },
                        }
                      }}
                      InputLabelProps={{
                        sx: {
                          color: darkMode ? '#b0bec5' : 'inherit',
                        }
                      }}
                    />
                  </Grid>
                ))}
              {/* Password Field */}
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  value={userData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  fullWidth
                  size="small"
                  sx={{ mb: 2 }}
                  InputProps={{
                    sx: {
                      borderRadius: '8px',
                      backgroundColor: darkMode ? 'rgba(50, 50, 50, 0.5)' : 'rgba(0,0,0,0.03)',
                      color: darkMode ? '#e0e0e0' : 'inherit',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: darkMode ? 'rgba(100, 221, 23, 0.3)' : 'rgba(0, 0, 0, 0.23)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: darkMode ? '#64dd17' : '#4caf50',
                      },
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      color: darkMode ? '#b0bec5' : 'inherit',
                    }
                  }}
                />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2} sx={{ position: 'relative', zIndex: 1 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ mb: 2, display: 'flex', alignItems: 'center', color: darkMode ? '#e0e0e0' : 'inherit' }}>
                  <Box 
                    component="span" 
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      bgcolor: darkMode ? 'rgba(100, 221, 23, 0.1)' : 'rgba(76, 175, 80, 0.1)',
                      mr: 1.5
                    }}
                  >
                    ✉️
                  </Box>
                  <Box>
                    <strong style={{ color: darkMode ? '#b0bec5' : '#4a6b57', display: 'block', fontSize: '0.8rem' }}>Email</strong>
                    {userData.email}
                  </Box>
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, display: 'flex', alignItems: 'center', color: darkMode ? '#e0e0e0' : 'inherit' }}>
                  <Box 
                    component="span" 
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      bgcolor: darkMode ? 'rgba(100, 221, 23, 0.1)' : 'rgba(76, 175, 80, 0.1)',
                      mr: 1.5
                    }}
                  >
                    📱
                  </Box>
                  <Box>
                    <strong style={{ color: darkMode ? '#b0bec5' : '#4a6b57', display: 'block', fontSize: '0.8rem' }}>Phone</strong>
                    {userData.mobile}
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ mb: 2, display: 'flex', alignItems: 'center', color: darkMode ? '#e0e0e0' : 'inherit' }}>
                  <Box 
                    component="span" 
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      bgcolor: darkMode ? 'rgba(100, 221, 23, 0.1)' : 'rgba(76, 175, 80, 0.1)',
                      mr: 1.5
                    }}
                  >
                    ♀️
                  </Box>
                  <Box>
                    <strong style={{ color: darkMode ? '#b0bec5' : '#4a6b57', display: 'block', fontSize: '0.8rem' }}>Gender</strong>
                    {userData.gender}
                  </Box>
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, display: 'flex', alignItems: 'center', color: darkMode ? '#e0e0e0' : 'inherit' }}>
                  <Box 
                    component="span" 
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      bgcolor: darkMode ? 'rgba(100, 221, 23, 0.1)' : 'rgba(76, 175, 80, 0.1)',
                      mr: 1.5
                    }}
                  >
                    🔢
                  </Box>
                  <Box>
                    <strong style={{ color: darkMode ? '#b0bec5' : '#4a6b57', display: 'block', fontSize: '0.8rem' }}>Age</strong>
                    {userData.age}
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          )}

          <FarmSection darkmode={darkMode ? 1 : 0}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                color: darkMode ? '#64dd17' : '#2e7d32',
                position: 'relative',
                zIndex: 1
              }}
            >
              <Box 
                component="span" 
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  bgcolor: darkMode ? 'rgba(100, 221, 23, 0.2)' : 'rgba(76, 175, 80, 0.2)',
                  mr: 1.5
                }}
              >
                <Agriculture sx={{ color: darkMode ? '#64dd17' : '#4caf50' }} />
              </Box>
              Farm Details
            </Typography>

            {editMode ? (
              <Grid container spacing={2} sx={{ position: 'relative', zIndex: 1 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Crops (comma separated)"
                    value={userData.farmData.crops.join(', ')}
                    onChange={(e) =>
                      handleFarmChange('crops', e.target.value.split(',').map(item => item.trim()))
                    }
                    fullWidth
                    size="small"
                    sx={{ mb: 2 }}
                    InputProps={{
                      sx: {
                        borderRadius: '8px',
                        backgroundColor: darkMode ? 'rgba(50, 50, 50, 0.5)' : 'rgba(0,0,0,0.03)',
                        color: darkMode ? '#e0e0e0' : 'inherit',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: darkMode ? 'rgba(100, 221, 23, 0.3)' : 'rgba(0, 0, 0, 0.23)',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: darkMode ? '#64dd17' : '#4caf50',
                        },
                      }
                    }}
                    InputLabelProps={{
                      sx: {
                        color: darkMode ? '#b0bec5' : 'inherit',
                      }
                    }}
                  />
                  <TextField
                    label="Land Size"
                    value={userData.farmData.landSize}
                    onChange={(e) => handleFarmChange('landSize', e.target.value)}
                    fullWidth
                    size="small"
                    sx={{ mb: 2 }}
                    InputProps={{
                      sx: {
                        borderRadius: '8px',
                        backgroundColor: darkMode ? 'rgba(50, 50, 50, 0.5)' : 'rgba(0,0,0,0.03)',
                        color: darkMode ? '#e0e0e0' : 'inherit',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: darkMode ? 'rgba(100, 221, 23, 0.3)' : 'rgba(0, 0, 0, 0.23)',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: darkMode ? '#64dd17' : '#4caf50',
                        },
                      }
                    }}
                    InputLabelProps={{
                      sx: {
                        color: darkMode ? '#b0bec5' : 'inherit',
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Irrigation System"
                    value={userData.farmData.irrigation}
                    onChange={(e) => handleFarmChange('irrigation', e.target.value)}
                    fullWidth
                    size="small"
                    sx={{ mb: 2 }}
                    InputProps={{
                      sx: {
                        borderRadius: '8px',
                        backgroundColor: darkMode ? 'rgba(50, 50, 50, 0.5)' : 'rgba(0,0,0,0.03)',
                        color: darkMode ? '#e0e0e0' : 'inherit',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: darkMode ? 'rgba(100, 221, 23, 0.3)' : 'rgba(0, 0, 0, 0.23)',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: darkMode ? '#64dd17' : '#4caf50',
                        },
                      }
                    }}
                    InputLabelProps={{
                      sx: {
                        color: darkMode ? '#b0bec5' : 'inherit',
                      }
                    }}
                  />
                  <TextField
                    label="Soil Type"
                    value={userData.farmData.soilType}
                    onChange={(e) => handleFarmChange('soilType', e.target.value)}
                    fullWidth
                    size="small"
                    sx={{ mb: 2 }}
                    InputProps={{
                      sx: {
                        borderRadius: '8px',
                        backgroundColor: darkMode ? 'rgba(50, 50, 50, 0.5)' : 'rgba(0,0,0,0.03)',
                        color: darkMode ? '#e0e0e0' : 'inherit',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: darkMode ? 'rgba(100, 221, 23, 0.3)' : 'rgba(0, 0, 0, 0.23)',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: darkMode ? '#64dd17' : '#4caf50',
                        },
                      }
                    }}
                    InputLabelProps={{
                      sx: {
                        color: darkMode ? '#b0bec5' : 'inherit',
                      }
                    }}
                  />
                </Grid>
              </Grid>
            ) : (
              <Grid container spacing={2} sx={{ position: 'relative', zIndex: 1 }}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5, color: darkMode ? '#e0e0e0' : 'inherit' }}>
                    <Box 
                      sx={{ 
                        mr: 1.5,
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: darkMode ? 'rgba(100, 221, 23, 0.1)' : 'rgba(76, 175, 80, 0.1)'
                      }}
                    >
                      <Grass sx={{ color: darkMode ? '#64dd17' : '#4caf50' }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: darkMode ? '#b0bec5' : '#4a6b57', fontWeight: 'bold' }}>
                        Crops
                      </Typography>
                      <Typography variant="body1">
                        {userData.farmData.crops.length > 0 
                          ? userData.farmData.crops.join(', ') 
                          : 'No crops specified'}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', color: darkMode ? '#e0e0e0' : 'inherit' }}>
                    <Box 
                      sx={{ 
                        mr: 1.5,
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: darkMode ? 'rgba(100, 221, 23, 0.1)' : 'rgba(76, 175, 80, 0.1)'
                      }}
                    >
                      <Terrain sx={{ color: darkMode ? '#64dd17' : '#4caf50' }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: darkMode ? '#b0bec5' : '#4a6b57', fontWeight: 'bold' }}>
                        Land Size
                      </Typography>
                      <Typography variant="body1">
                        {userData.farmData.landSize || 'Not specified'}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5, color: darkMode ? '#e0e0e0' : 'inherit' }}>
                    <Box 
                      sx={{ 
                        mr: 1.5,
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: darkMode ? 'rgba(100, 221, 23, 0.1)' : 'rgba(76, 175, 80, 0.1)'
                      }}
                    >
                      <Water sx={{ color: darkMode ? '#64dd17' : '#4caf50' }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: darkMode ? '#b0bec5' : '#4a6b57', fontWeight: 'bold' }}>
                        Irrigation
                      </Typography>
                      <Typography variant="body1">
                        {userData.farmData.irrigation || 'Not specified'}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', color: darkMode ? '#e0e0e0' : 'inherit' }}>
                    <Box 
                      sx={{ 
                        mr: 1.5,
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: darkMode ? 'rgba(100, 221, 23, 0.1)' : 'rgba(76, 175, 80, 0.1)'
                      }}
                    >
                      <LocalFlorist sx={{ color: darkMode ? '#64dd17' : '#4caf50' }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: darkMode ? '#b0bec5' : '#4a6b57', fontWeight: 'bold' }}>
                        Soil Type
                      </Typography>
                      <Typography variant="body1">
                        {userData.farmData.soilType || 'Not specified'}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            )}
          </FarmSection>

          <Divider 
            sx={{ 
              my: 3, 
              borderColor: darkMode ? 'rgba(100, 221, 23, 0.3)' : 'rgba(76, 175, 80, 0.3)',
              position: 'relative',
              zIndex: 1
            }} 
          />

          <Box sx={{ textAlign: 'center', mt: 3, position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h6"
              color={darkMode ? '#64dd17' : '#2e7d32'}
              fontWeight="bold"
              mb={3}
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                '&:before, &:after': {
                  content: '""',
                  flex: 1,
                  borderBottom: darkMode 
                    ? '1px solid rgba(100, 221, 23, 0.3)' 
                    : '1px solid rgba(76, 175, 80, 0.3)',
                  margin: '0 1rem'
                }
              }}
            >
              🌱 Growing with AgriTech
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <GlowingButton
                variant="contained"
                color="success"
                startIcon={<Edit />}
                onClick={editMode ? handleSaveProfile : toggleEditMode}
                darkmode={darkMode ? 1 : 0}
                sx={{
                  background: darkMode 
                    ? 'linear-gradient(135deg, #64dd17, #1de9b6)' 
                    : 'linear-gradient(135deg, #4caf50, #8bc34a)',
                  '&:hover': { 
                    background: darkMode 
                      ? 'linear-gradient(135deg, #56c11b, #1bd6a5)' 
                      : 'linear-gradient(135deg, #3d8b40, #7cb342)',
                  },
                  px: 4,
                  py: 1,
                  borderRadius: '50px',
                  boxShadow: darkMode 
                    ? '0 4px 15px rgba(100, 221, 23, 0.3)' 
                    : '0 4px 15px rgba(76, 175, 80, 0.3)',
                }}
              >
                {editMode ? 'Save Changes' : 'Edit Profile'}
              </GlowingButton>
              {editMode ? (
                <Button
                  variant="outlined"
                  color="error"
                  onClick={toggleEditMode}
                  sx={{
                    borderColor: '#f44336',
                    color: '#f44336',
                    '&:hover': { 
                      borderColor: '#d32f2f',
                      backgroundColor: 'rgba(244, 67, 54, 0.04)'
                    },
                    px: 4,
                    py: 1,
                    borderRadius: '50px'
                  }}
                >
                  Cancel
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<Logout />}
                  onClick={handleLogout}
                  sx={{
                    borderColor: '#f44336',
                    color: '#f44336',
                    '&:hover': { 
                      borderColor: '#d32f2f',
                      backgroundColor: 'rgba(244, 67, 54, 0.04)'
                    },
                    px: 4,
                    py: 1,
                    borderRadius: '50px'
                  }}
                >
                  Logout
                </Button>
              )}
            </Box>
          </Box>
        </ProfileContainer>
      </motion.div>
    </NatureBackground>
  );
};

export default FarmXpertProfile; 