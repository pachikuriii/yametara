import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import dayjs from '../../../day-js';
import { retirementDateState } from '../../../session-stroage';
import TodoPlate from '../../atoms/todo-plate';
import Card from 'src/components/atoms/card';
import TodoDetail from 'src/components/atoms/todo-detail';

export default function Pension() {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [DayAfterRetirementDate, setDayAfterRetirementDate] = useState('');
  const [pensionApplyDeadline, setPensionApplyDeadline] = useState('');

  useEffect(() => {
    setDayAfterRetirementDate(
      dayjs(storedRetirementDate).add(1, 'day').format('M月D日'),
    );
    setPensionApplyDeadline(
      dayjs(storedRetirementDate).add(15, 'day').format('M月D日'),
    );
  }, [storedRetirementDate]);

  return (
    <div id='pension'>
      <TodoPlate>年金</TodoPlate>
      <TodoDetail
        what='国民年金への加入手続き'
        where='住所地の市区役所/町村役場の窓口やマイナポータルなどで'
        when={`退職日翌日の${DayAfterRetirementDate}から${pensionApplyDeadline}までに`}
        prepare={
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            className='mySwiper'
            navigation={true}
            modules={[Navigation]}
            centeredSlides={true}
            id='swiper'
          >
            <SwiperSlide>
              <div className='flex justify-center'>
                <Card>
                  <p>住所地の市区役所/町村役場の窓口で手続きする場合</p>
                  <ol className='list-decimal'>
                    <li>本人確認書類</li>
                    <p className='text-xs'>（写真つきのもの）</p>
                    <li>基礎年金番号を明らかにすることができる書類</li>
                    <p className='text-xs'>
                      （基礎年金番号通知書または年金手帳など）
                    </p>
                    <li>
                      健康/厚生年金保険の資格喪失日や離職日が記載されている書類
                    </li>
                    <p className='text-xs'>
                      （健康保険・厚生年金保険資格喪失証明書、離職票など）
                    </p>
                  </ol>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex justify-center'>
                <Card>
                  <p>住所地の市区役所/町村役場へ郵送する場合</p>
                  <ol className='list-decimal'>
                    <li>国民年金被保険者関係届書</li>
                    <li>本人確認書類の写し</li>
                    <p className='text-xs'>（写真つきのもの）</p>
                    <li>基礎年金番号がわかる書類の写し</li>
                    <p className='text-xs'>
                      （基礎年金番号通知書、年金手帳など）
                    </p>
                    <li>
                      健康/厚生年金保険の資格喪失日や離職日が記載されている書類の写し
                    </li>
                    <p className='text-xs'>
                      （健康保険・厚生年金保険資格喪失証明書、離職票など）
                    </p>
                  </ol>
                </Card>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex justify-center'>
                <Card>
                  <p>マイナポータルで電子申請する場合</p>
                  <ol className='list-decimal'>
                    <li>マイナンバーカード</li>
                    <li>カードの受け取りの際に設定したパスワード</li>
                    <p className='text-xs'>
                      （数字4桁の利用者証明用電子証明書パスワードおよび券面事項入力補助用暗証番号）
                    </p>
                  </ol>
                </Card>
              </div>
            </SwiperSlide>
          </Swiper>
        }
      ></TodoDetail>
    </div>
  );
}
