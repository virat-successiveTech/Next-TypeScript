'use client';


import Modal from '@/components/assignment-5/Modal';
import { useState } from 'react';



export default function Question13() {
  const [open,setopen]=useState<boolean>(false);

  return (
    <div style={{ padding: '20px' }}>
        <div><button onClick={()=>setopen(true)}>open</button></div>
      <Modal open={open} setopen={setopen}>
        <div>hello this is model</div>
        <div>content can be displayed here</div>
      </Modal>
    </div>
  );
}