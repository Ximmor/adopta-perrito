import React from "react";
import Button from "react-bootstrap/Button";

const Tags = ({ color, raza }) => {
  return (
    <div className="d-grid mt-auto">
      <Button href="#" variant={color} size="m">
        {raza}
      </Button>
    </div>
  );
};

export default Tags;