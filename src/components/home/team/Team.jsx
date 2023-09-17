import React from "react";
import "./team.css";
import Heading from "../../common/Heading";
import { team } from "../../data/Data";

const Team = () => {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading
            title="Our Featured Agents"
            subtitle="Meet our accomplished agents, experts in real estate. They'll guide you through finding your dream property which will match your preferences."
          />

          <div className="content mtop grid3">
            {team.map((val, index) => {
              return (
                <div className="box" key={index}>
                  <div className="details">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>

                    <i className="fa fa-location-dot"></i>
                    <label>{val.address}</label>
                    <h4>{val.name}</h4>

                    <ul>
                        {val.icon.map((icon, index)=> {
                         return (
                            <li key={index}>{icon}</li>
                         )   
                        })}
                    </ul>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
