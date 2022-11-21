import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Tab = styled.button`
  margin-right: 60px;
  border: none;
  background: none;
  font-size: 18px;
  line-height: 54px;
  text-transform: uppercase;
  font-family: "Renner Medium";
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    color: #c5a47e;
    border-bottom: 3px solid #c5a47e;
    margin-bottom: -3px;
  `}
`;

const TabContent = () => {
  const titles = ["description", "additional", "review (0)", "pricing plans"]
  const [tab, setTab] = useState(0)
  const [active, setActive] = useState(titles[0]);
  const [content, setContent] = useState("")
  useEffect(() => {
    switch (tab) {
      case 0:
        setContent("Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos iste fugiat rerum voluptate non similique asperiores, saepe ipsum rem accusamus libero sed earum enim eum ut quisquam perspiciatis. Tempore aut iste veniam perferendis sunt, in delectus perspiciatis culpa reprehenderit.")
        break
      case 1:
        setContent("2")
        break
      case 2:
        setContent("3")
        break
      case 3:
        setContent("4")
        break
      default:
        break;
    }
  }, [tab])

  return (
    <>
      <div className="tab-nav">
        <div className="nav">
          {
            titles.map((title, index) => {
              return <Tab className='nav-item'
                active={active === title}
                key={index}
                onClick={() => {
                  setActive(title)
                  setTab(index)
                }}
              >
                {title}
              </Tab>
            })
          }
          
        </div>
      </div>
      <div className="tab-content">
        <p>{content}</p>
        <br />
        <p>{content}</p>
      </div>
    </>
  )
}

export default TabContent