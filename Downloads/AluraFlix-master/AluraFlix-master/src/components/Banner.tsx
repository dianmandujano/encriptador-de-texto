import React, { useState } from 'react';
import { Box, Typography, Card, Dialog } from '@mui/material';
import bannerImg from '../assets/img/banner.png';
import imageCard from '../assets/img/player.png';
import YouTubePlayer from './YoutubePlayer';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
const Banner: React.FC = () => {
    const [open, setOpen] = useState(false); 
    const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/watch?v=CYP-ViRIUr8'); 
    
    const handleCardClick = () => {
        setVideoUrl('https://www.youtube.com/watch?v=CYP-ViRIUr8'); 
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setVideoUrl(''); // 
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: { xs: 'auto', md: '500px' }, 
                backgroundImage: `url(${bannerImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', md: 'row' }, 
                padding: { xs: '0px', md: '0px' },
                position: 'relative',
            }}
        >
            {/* Sección de texto */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, marginLeft: { md: '70px' }, marginBottom: { xs: '16px', md: '0' }, padding: { xs: '16px', md: '16px' } }}>
                <Typography
                    variant="h5"
                    sx={{
                        backgroundColor: 'none',
                        color: 'white',
                        padding: '7px 10px',
                        borderRadius: '8px',
                        display: 'inline-block',
                        marginBottom: '16px',
                    }}
                >
                
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'white',
                        maxWidth: '180px',
                        fontSize: { xs: '0.9rem', md: '1rem' }, // Tamaño de fuente responsivo
                        margin: '50px',
                    }}
                >
                    Este challenge es una excelente oportunidad de aprendizaje. 
                    Permite comprometerse en la resolución de un problema,
                    poniendo en práctica todos los conocimientos adquiridos en la formación de React 
                    y en el proceso, disfrutar de las hipnotizantes maravillas de la naturaleza.
                </Typography>
            </Box>

            {/* Tarjeta flotante */}
            <Card
                sx={{
                    cursor: 'pointer',
                    width: { xs: '90%', sm: '600px' }, // Ancho ajustado para pantallas pequeñas
                    position: 'relative',
                    top: { xs: '0', md: 'unset' },
                    right: { xs: '0', md: '210px' },
                    borderRadius: '12px',
                    boxShadow: '0px 4px 20px rgb(40 9 212)',
                    marginBottom: { xs: '16px', md: '0' },
                    margin: { md: '0' }, // Centrar en pantallas pequeñas
                }}
                onClick={handleCardClick}
            >
                <Box
                    component="img"
                    src={imageCard}
                    alt="Miniatura"
                    sx={{
                        width: '100%',
                        height: { xs: '200px', sm: '295px' }, // Ajustar altura de la imagen
                        objectFit: 'cover',
                    }}
                />
                        <Box
                    onClick={() => handleCardClick()}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#fff',
                        opacity: 0.8,
                        '&:hover': {
                        opacity: 1,
                        },
                        cursor: 'pointer',
                    }}
                    >
                    <PlayCircleOutlineIcon sx={{ fontSize: 60 }} />
                    </Box>
            </Card>
            {/* Popup para reproducir el video */}
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <YouTubePlayer videoUrl={videoUrl} onClose={handleClose} />
            </Dialog>
        </Box>
    );
};

export default Banner;
