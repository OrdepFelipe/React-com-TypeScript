import {Titulo as TituloEstilo} from './styles';


export type  Props = {
  children: string
  fontSize?: number //Quando o argumento for obrigatório em um componente podemos utilizar a ?
}

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>
    {props.children}
  </TituloEstilo>
);

export default Titulo;
