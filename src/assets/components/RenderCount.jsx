import { useRef } from "react";

function RenderCount({ name }) {
  const renderRef = useRef(0);
  renderRef.current += 1;

  return (
    <p style={{ margin: "0.25rem 0", fontSize: "0.85rem", opacity: 0.75 }}>
      {name} renders: {renderRef.current}
    </p>
  );
}

export default RenderCount;
