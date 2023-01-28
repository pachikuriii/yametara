import HealthlInsurance from './health-insurance';
import Pension from './pension';
export default function Detail() {
  return (
    <>
      {
        <div>
          <HealthlInsurance></HealthlInsurance>
          <Pension></Pension>
        </div>
      }
    </>
  );
}
