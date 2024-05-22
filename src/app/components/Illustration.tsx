interface IllustrationProps {
  useSymbol: boolean;
  symbol: string;
  name: string;
}

function Illustration(props : IllustrationProps) {
  if(props.useSymbol)
    return <p className="text-5xl font-medium text-black">{props.symbol}</p>;

  return <p>pokemon image</p>;
}

export default Illustration;