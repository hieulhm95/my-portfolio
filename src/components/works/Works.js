/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TextDecrypt } from '../content/TextDecrypt';

import './Works.css';

import VietravelAsia from '../../assets/recentprojects/vietravel-asia.png';
import IndochineHouse from '../../assets/recentprojects/indochine-house.png';
import PhuotLuonFestival from '../../assets/recentprojects/phuot-luon-festival.png';
import LivByAia from '../../assets/recentprojects/liv-by-aia.jpg';
import Vieclamtot from '../../assets/recentprojects/vieclamtot.png';
import KemNghia from '../../assets/recentprojects/kemnghia.jpg';
import Autotable from '../../assets/recentprojects/autotable.png';
import YeuLanh from '../../assets/recentprojects/yeulanh.png';
import FlavorVietnam from '../../assets/recentprojects/flavor-vietnam.png';
import Unitour from '../../assets/recentprojects/unitour.png';

const useStyles = makeStyles(theme => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: 'auto',
  },
}));

const projects = [
  {
    id: 1,
    title: 'Vietravel Asia',
    description: `Designed and developed a ReactJS portfolio
    with fancy 3D animations using Three.js for
    the background element.`,
    alter: 'React Portfolio',
    image: `${VietravelAsia}`,
  },
  {
    id: 2,
    title: 'Indochine House',
    description: `An advocacy project website built using
    MEAN stack with fact-checking tool to promote actions against
    fake news.`,
    alter: 'VeriTru Project',
    image: `${IndochineHouse}`,
  },
  {
    id: 3,
    title: 'Phượt Luôn Festival',
    description: `Logistics and Forwarding website built using
    ReactJS to design and develop its front-end.`,
    alter: 'LoFo Project',
    image: `${PhuotLuonFestival}`,
  },
  {
    id: 4,
    title: 'Liv By AIA',
    description: `A website portfolio project for the Startup Dev Team
    built using MEVN stack to demonstrate the CRUD capabilities of the tech stack.`,
    alter: 'Startup Project',
    image: `${LivByAia}`,
  },
  {
    id: 5,
    title: 'Vieclamtot by Chợ Tốt',
    description: `A website project for the La Calle Cafe business
    built using Wordpress and PHP with integrated SEO tools to help
    the business ramp up its prospects and lead generation.`,
    alter: 'Startup Project',
    image: `${Vieclamtot}`,
  },
  {
    id: 6,
    title: 'Kềm Nghĩa',
    description: `A website project for the La Calle Cafe business
    built using Wordpress and PHP with integrated SEO tools to help
    the business ramp up its prospects and lead generation.`,
    alter: 'Startup Project',
    image: `${KemNghia}`,
  },
  {
    id: 7,
    title: 'Autotable',
    description: `A website project for the La Calle Cafe business
    built using Wordpress and PHP with integrated SEO tools to help
    the business ramp up its prospects and lead generation.`,
    alter: 'Startup Project',
    image: `${Autotable}`,
  },
  {
    id: 8,
    title: 'Yêu Lành',
    description: `A website project for the La Calle Cafe business
    built using Wordpress and PHP with integrated SEO tools to help
    the business ramp up its prospects and lead generation.`,
    alter: 'Startup Project',
    image: `${YeuLanh}`,
  },
  {
    id: 9,
    title: 'Flavor Vietnam 2022',
    description: `A website project for the La Calle Cafe business
    built using Wordpress and PHP with integrated SEO tools to help
    the business ramp up its prospects and lead generation.`,
    alter: 'Startup Project',
    image: `${FlavorVietnam}`,
  },
  {
    id: 10,
    title: 'Cởi mở - Unitour',
    description: `A website project for the La Calle Cafe business
    built using Wordpress and PHP with integrated SEO tools to help
    the business ramp up its prospects and lead generation.`,
    alter: 'Startup Project',
    image: `${Unitour}`,
  },
];

export const Works = () => {
  const classes = useStyles();

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map(project => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + '. ' + project.title} />
              </h3>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
