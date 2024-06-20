import React, { FC } from 'react';
import Titulo from '../../components/Titulo';
import Paragrafo from '../../components/Paragrafo';
import { GithubSecao } from './styles';

const Sobre: FC = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo='principal'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, quam magnam minima laboriosam fugit, ex minus quasi sed autem qui quos incidunt nesciunt vel ad blanditiis ipsam! Vero, eaque. Tempore?
    </Paragrafo>
    <GithubSecao>
      <img  src="https://github-readme-stats.vercel.app/api?username=OrdepFelipe&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=OrdepFelipe&layout=compact&langs_count=7&theme=dracula"/>
  </GithubSecao>
  </section>
);

export default Sobre;
