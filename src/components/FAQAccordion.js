import { useRef, useState, useEffect } from "react";

const data = [
  {
    question: "What is mocean? Mocean in the ocean?",
    answer: "Lorem ipsum odor amet, consectetuer adipiscing elit. Velit penatibus posuere cras cras lacinia; condimentum cubilia purus. Orci class mollis ultrices mi erat nulla felis velit. Eu interdum volutpat commodo, praesent mauris hac. Iaculis himenaeos fermentum; nullam parturient cras faucibus vivamus suscipit. Quisque fusce lorem aenean auctor porta rhoncus.",
  },
  {
    question: "Can I test the SMS with my own number?",
    answer: "Lorem ipsum",
  },
  {
    question: "Can I send messages internationally?",
    answer: "Lorem ipsum",
  },
  {
    question: "How many messages can I send with the trial?",
    answer: "Lorem ipsum",
  },
];

//  accordionitem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className={`accordian ${isOpen ? "active" : ""}`}
    onLoadStart={onClick}
    onClick={onClick}    >
      <div
        className={`accordian-summary ${isOpen ? "active" : ""}`}
      >
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
    console.log("index: ", index);
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
