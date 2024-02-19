"use client";
import React, { useState } from "react";
import Image from "next/image";

import logo from '../assets/icon/logo.svg'
import users from '../assets/icon/users.svg'
import arrow from '../assets/icon/arrow.svg'
import germany from '../assets/icon/Germany.svg'
import ukraine from '../assets/icon/Ukraine.svg'

export default function Home() {

  const [legalSpouseCount, setLegalSpouseCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(2);
  const [petsCount, setPetsCount] = useState(5);

  const handleDecrease = (counterType: string) => {
    switch (counterType) {
      case 'legalSpouse':
        setLegalSpouseCount((prevCount) => Math.max(prevCount - 1, 0));
        break;
      case 'children':
        setChildrenCount((prevCount) => Math.max(prevCount - 1, 0));
        break;
      case 'pets':
        setPetsCount((prevCount) => Math.max(prevCount - 1, 0));
        break;
      default:
        break;
    }
  };

  const handleIncrease = (counterType: string) => {
    switch (counterType) {
      case 'legalSpouse':
        setLegalSpouseCount((prevCount) => prevCount + 1);
        break;
      case 'children':
        setChildrenCount((prevCount) => prevCount + 1);
        break;
      case 'pets':
        setPetsCount((prevCount) => prevCount + 1);
        break;
      default:
        break;
    }
  };
  
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <Image src={logo} alt="Logo" width={157} height={28} />
        </div>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </header>

      <div className="main-content">
        <div>
          <h1>Traveling Members</h1>
          <h2>Are you traveling alone or with someone else?</h2>
          <div className="options">
            <div className="option">Alone</div>
            <div className="option">With others</div>
          </div>
          <div className="counter-block">
            <div className="counter-title">
              <Image src={users} alt="users" width={20} height={20} />
              <h4>Travelling members</h4>
            </div>
            <div className="counter-item">
              <div className="counter-item-detail">
                <h4>Legal Spouse</h4>
                <p>Must have marriage certificate</p>
              </div>
              <div className="counter">
                <div onClick={() => handleDecrease('legalSpouse')}>-</div>
                <p>{legalSpouseCount}</p>
                <div onClick={() => handleIncrease('legalSpouse')}>+</div>
              </div>
            </div>

            <div className="counter-item">
              <div className="counter-item-detail">
                <h4>Children under 18</h4>
                <p>Must have birth certificate</p>
              </div>
              <div className="counter">
                <div onClick={() => handleDecrease('children')}>-</div>
                <p>{childrenCount}</p>
                <div onClick={() => handleIncrease('children')}>+</div>
              </div>
            </div>

            <div className="counter-item">
              <div className="counter-item-detail">
                <h4>Pets</h4>
                <p>Must have documents</p>
              </div>
              <div className="counter">
                <div onClick={() => handleDecrease('pets')}>-</div>
                <p>{petsCount}</p>
                <div onClick={() => handleIncrease('pets')}>+</div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <div className="button">
              <Image src={arrow} alt="arrow" width={20} height={20} />
              <p>Back</p>
            </div>
            <div className="button continue">
              <p>Continue</p>
            </div>
          </div>
        </div>
        
        <div className="image-block">
          <div className="account-info">
            <div className="account-details">
              <div className="avatar">
                <div>FT</div>
              </div>
              <div>
                <h3>Fellow Traveler</h3>
                <p>traveleremail@gmail.com</p>
              </div>
            </div>
            <div className="round-images">
              <Image src={germany} alt="passport" width={32} height={32} className="round-image" />
              <Image src={ukraine} alt="passport" width={32} height={32} />
            </div>
          </div>
          <div className="finance-information">
            <h4>Finance Information</h4>
            <div className="list">
              <div className="list-item">
                <p>Full Remote Job</p>
                <h5>Yes, for over 6 months.</h5>
              </div>

              <div className="list-item">
                <p>Self employed</p>
                <h5>I&apos;m self employed &lt;3 years business</h5>
              </div>
            </div>
            <div className="cards">
              <div className="cards-item">
                <p>Income</p>
                <h5>$1,000</h5>
              </div>
              <div className="cards-item">
                <p>Savings</p>
                <h5>$10,000</h5>
              </div>
            </div>
            <div className="traveling-members">
              <div className="divider"/>
              <h4>Traveling Members</h4>
              <div className="traveling-members-list">
                <div className="traveling-members-list-item">
                  <div className="number">1</div>
                  <p>Legal Spouce</p>
                </div>
                <div className="traveling-members-list-item">
                  <div className="number">2</div>
                  <p>Children under 18</p>
                </div>
                <div className="traveling-members-list-item">
                  <div className="number">5</div>
                  <p>Pets</p>
                </div>
              </div>
              <div className="divider second-divider"/>
            </div>

            <div className="additions">
              <h4>Additions</h4>
              <div/>
            </div>
          </div>
          <p className="footer">Personal Travel Card by Citizen Remote</p>
        </div>
      </div>
    </div>
  );
}
