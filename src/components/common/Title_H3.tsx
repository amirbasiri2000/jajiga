interface Props {
  title: string; 
}

const Title_H3 = ({ title }: Props) => {
  return (
    <h3 className="text-[.87rem]  font-bold pb-2 text-[#252a31]" title={title}>
      {title}
    </h3>
  );
};

export default Title_H3;
