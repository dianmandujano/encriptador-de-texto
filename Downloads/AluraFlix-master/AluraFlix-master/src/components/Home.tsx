import React from 'react';
import { Box, Grid2, Typography } from '@mui/material';

import CardVideo from './CardVideo';
import { VideoData } from '../App';
import Banner from './Banner';

interface HomeProps {
  videos: VideoData[];
  onEdit: (video: VideoData | null) => void;
  onDelete: (id: number) => void;
}

const categoryColors: Record<string, string> = {
  AMAZONIA: '#FFA07A',
  MADAGASCAR: '#FFD700',
  SUDAFRICA: '#FF6347',
  ALASKA: '#20B2AA',
  RUSIA: '#87CEFA',
};

const groupVideosByCategory = (videos: VideoData[]) => {
  return videos.reduce((groups, video) => {
    if (!groups[video.category]) {
      groups[video.category] = [];
    }
    groups[video.category].push(video);
    return groups;
  }, {} as Record<string, VideoData[]>);
};

const Home: React.FC<HomeProps> = ({ videos, onEdit, onDelete }) => {
  const groupedVideos = groupVideosByCategory(videos);

  return (
    <Box>
      <Banner />
      {Object.entries(groupedVideos).map(([category, categoryVideos]) => (
        <Box key={category} mb={4} sx={{padding: '0 40px'}}>
          <Box mt={4} ml={2} sx={{color: 'black', backgroundColor: categoryColors[category] || '#9e9e9e', padding: '7px 10px', borderRadius: '8px', display: 'inline-block', marginBottom: '16px'}}>
            <Typography variant="h5">
              {category}
          </Typography>
          </Box>
          <Grid2 container>
            {categoryVideos.map((video) => (
              <Grid2 size={{xs:12,sm:6,md:3}} key={video.id}>
                <CardVideo video={video} onEdit={onEdit} onDelete={onDelete} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      ))}
    </Box>
  );
};

export default Home;