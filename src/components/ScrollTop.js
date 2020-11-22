import React, { useState, useEffect } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      toggleVisibility();
    });

    return;
  }, []);

  const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <div
      className="scroll-to-top"
      style={{ position: "fixed", bottom: 0, right: 0, margin: 30 }}
    >
      {isVisible && (
        <OverlayTrigger
          overlay={<Tooltip id="tooltip-disabled">Scroll to top</Tooltip>}
          placement="left"
        >
          <Button className="rounded-circle" onClick={scrollToTop}>
            <i className="material-icons">keyboard_arrow_up</i>
          </Button>
        </OverlayTrigger>
      )}
    </div>
  );
};

export default ScrollTop;
