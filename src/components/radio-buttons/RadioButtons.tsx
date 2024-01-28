import * as S from './radio.styles';

type Radio = {
  order: string;
  setOrder: (order: string) => void;
};
const RadioButtons = ({ setOrder, order }: Radio) => {
  const clickDesc = () => {
    setOrder('desc');
  };

  const clickAsc = () => {
    setOrder('asc');
  };
  return (
    <S.RadioContainer>
      <div>
        <input
          type="radio"
          name="choose"
          value="desc"
          onChange={clickDesc}
          checked={order === 'desc'}
        />
        <label>По убыванию</label>
      </div>
      <div>
        <input
          type="radio"
          name="choose"
          value="asc"
          onChange={clickAsc}
          checked={order === 'asc'}
        />
        <label>По возрастанию</label>
      </div>
    </S.RadioContainer>
  );
};

export default RadioButtons;
