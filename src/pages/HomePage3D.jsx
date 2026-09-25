import React from 'react';
import FrameScrollCanvas from '../components/FrameScrollCanvas';
import Navbar from '../components/Navbar';

export default function HomePage3D({ onOpenModal, onShowToast }) {
  return (
    <div className="homepage-3d-wrapper" style={{ background: '#050505', color: '#fff', minHeight: '100vh' }}>
      <FrameScrollCanvas />
    </div>
  );
}
