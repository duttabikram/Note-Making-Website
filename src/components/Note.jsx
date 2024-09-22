import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const AnimatedButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    transform: 'scale(1.1)',
    transition: 'transform 0.2s',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  borderRadius: '8px',
  padding: '8px 16px',
  fontWeight: 'bold',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
}));

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note" style={{ marginBottom: '16px', padding: '16px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{props.title}</h1>
      <p style={{ fontSize: '1rem', marginBottom: '16px' }}>{props.content}</p>
      <AnimatedButton 
        variant="contained" 
        onClick={handleClick} 
        startIcon={<span>🗑️</span>}
      >
      </AnimatedButton>
    </div>
  );
}

export default Note;

