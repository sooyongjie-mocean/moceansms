import { useRef, useState, useEffect } from "react";

const data = [
  {
    question: "Product promotions",
    answer:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper proin himenaeos nisi convallis mus ultrices. Nunc habitasse adipiscing nibh ad magnis vulputate ac senectus.",
  },
  {
    question: "Order updates",
    answer:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper proin himenaeos nisi convallis mus ultrices. Nunc habitasse adipiscing nibh ad magnis vulputate ac senectus.",
  },
  {
    question: "Appointment reminders",
    answer:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper proin himenaeos nisi convallis mus ultrices. Nunc habitasse adipiscing nibh ad magnis vulputate ac senectus.",
  },
  {
    question: "Transaction alerts",
    answer:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper proin himenaeos nisi convallis mus ultrices. Nunc habitasse adipiscing nibh ad magnis vulputate ac senectus.",
  },
];

//  accordionitem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div
      className={`accordian ${isOpen ? "active" : ""}`}
      onLoadStart={onClick}
      onClick={onClick}
    >
      <div className={`accordian-summary ${isOpen ? "active" : ""}`}>
        {question}
      </div>
      <div
        ref={contentHeight}
        className="accordian-details"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        {answer}
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      console.log("loading stuff");
      handleItemClick(0);
    }
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="accordian-wrapper">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
