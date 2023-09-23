interface BentoBoxProps {
  boxQuantity?: number;
  itemList?: any[];
  itemClassName: string;
  itemStyle?: React.CSSProperties;
  bentoStyle?: React.CSSProperties;
}

export const BentoBox: React.FC<BentoBoxProps> = ({
  boxQuantity,
  itemList,
  itemClassName,
  itemStyle,
  bentoStyle,
}) => {
  if (itemList !== undefined) {
    const items = itemList.map((i, index) => (
      <div key={index} className={itemClassName} style={itemStyle}>
        {i}
      </div>
    ));

    return <div className={"BB " + { itemClassName }}>{items}</div>;
  }

  if (boxQuantity !== undefined) {
    const items = Array.from({ length: boxQuantity }, (_, index) => (
      <div key={index} className={itemClassName} style={itemStyle}></div>
    ));
    return (
      <div style={bentoStyle} className={"BB " + { itemClassName }}>
        {items}
      </div>
    );
  }

  return null;
};
