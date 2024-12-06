import React from 'react';
import {
  Box, Typography, CardMedia,
  Button, Modal, Grid, Paper,
  useTheme, useMediaQuery,
  Avatar,
  Divider
} from '@mui/material';
import {
  Timer, Gavel, Close,
  Person,
  Home,
  Phone
} from '@mui/icons-material';
import { InfoChip } from './style';

const AssetSuccessModal = ({ open, handleClose, item }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  if (!item) return null;

  const user = {
    name: 'Nguyễn Văn A',
    address: '123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh',
    phone: '0123456789',
    avatar: '/placeholder.svg?height=100&width=100'
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="auction-details-modal"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: fullScreen ? '100%' : 800,
        maxHeight: '90vh',
        overflowY: 'auto',
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 4
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" component="h2" color="#b41712" fontWeight="bold">
            Chi tiết đấu giá
          </Typography>
          <Button onClick={handleClose} sx={{ minWidth: 'auto', p: 0.5 }}>
            <Close />
          </Button>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="310"
              image={item.auctionSession.asset.mainImage || '/placeholder.svg?height=300&width=300'}
              alt={item.auctionSession.asset.assetName}
              sx={{ borderRadius: 2, objectFit: 'cover' }}
            />
            <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mt: 2 }}>
              {item.auctionSession.asset.assetName}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="body1" color="text.secondary">
                Giá thắng:
              </Typography>
              <Typography variant="h6" color="#b41712" fontWeight="bold">
                {item.price.toLocaleString('vi-VN')} VNĐ
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Timer color="action" fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                Thời gian kết thúc: {new Date(item.victoryTime).toLocaleString('vi-VN')}
              </Typography>
            </Box>
            <InfoChip
              icon={<Gavel />}
              label="Đã thắng đấu giá"
              color="success"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Thông tin người nhận
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar src={user.avatar} sx={{ width: 60, height: 60, mr: 2 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Người thắng đấu giá
                  </Typography>
                </Box>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Person sx={{ mr: 2, color: '#b41712' }} />
                <Typography variant="body1">{user.name}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Home sx={{ mr: 2, color: '#b41712' }} />
                <Typography variant="body1">{user.address}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Phone sx={{ mr: 2, color: '#b41712' }} />
                <Typography variant="body1">{user.phone}</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            Thông tin vật phẩm
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph dangerouslySetInnerHTML={{ __html: item.auctionSession.asset.assetDescription || 'Không có thông tin chi tiết.' }} />
        </Box>
      </Box>
    </Modal>
  );
};

export default AssetSuccessModal;