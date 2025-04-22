import type { Dispatch, SetStateAction } from "react";
const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

function TipPercentageForm({setTip, tip} : TipPercentageFormProps) {
  return (
    <div>
      <h3 className=" font-black text-2xl">Propina</h3>

      <form action="">
        {tipOptions.map((tipOption) => (
          <div className=" flex gap-2" key={tipOption.id}>
            <input 
            type="radio" 
            id={tipOption.id} 
            name="tip" 
            value={tipOption.value} 
            // El signo + transforma un string en numero
            onChange={e => setTip(+e.target.value)}
            checked={tipOption.value == tip}
            />

            <label htmlFor="">{tipOption.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default TipPercentageForm;
