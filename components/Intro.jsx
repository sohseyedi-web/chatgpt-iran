import Container from './container/Container';
import * as HiIcon from "react-icons/hi2";

const Intro = () => {
  return (
    <Container>
      <section dir='rtl' className='h-screen flex items-center justify-center text-white flex-col max-w-5xl mx-auto text-center'>
      <h4 className="mb-8 font-semibold text-4xl">ChatGPT</h4>
      <div className="w-full flex items-center justify-between flex-wrap">
          <div className="md:w-[31%] w-[45%] mb-10">
            <div className="mb-5 flex items-center justify-center flex-col">
              <span className="mb-2">
                <HiIcon.HiOutlineSun size={28} />
              </span>
              <span>مثال ها</span>
            </div>
            <div className="space-y-4">
              <p className="py-4 px-2 rounded-lg border-2 border-solid border-white">
                درخواستت رو برام توضیح بده
              </p>
              <p className="p-4 px-2 rounded-lg border-2 border-solid border-white">
                چه تفاوتی بین سگ و گربه است؟
              </p>
              <p className="p-4 px-2 rounded-lg border-2 border-solid border-white">
                خورشید چه رنگی است؟
              </p>
            </div>
          </div>
          <div className="md:w-[31%] w-[45%] mb-10">
            <div className="mb-5 flex items-center justify-center flex-col">
              <span className="mb-2">
                <HiIcon.HiOutlineBolt size={28} />
              </span>
              <span>ظرفیت ها</span>
            </div>
            <div className="space-y-4">
              <p className="py-4 px-2 rounded-lg border-2 border-solid border-white">
                مدل ها رو تغییر بده
              </p>
              <p className="p-4 px-2 rounded-lg border-2 border-solid border-white">
                مکالمه ها در پایگاه داده دخیره میشوند
              </p>
              <p className="p-4 px-2 rounded-lg border-2 border-solid border-white">
                ارسال جواب با اعلان است
              </p>
            </div>
          </div>
          <div className="md:w-[31%] w-[45%] mb-10">
            <div className="mb-5 flex items-center justify-center flex-col">
              <span className="mb-2">
                <HiIcon.HiOutlineExclamationTriangle size={28} />
              </span>
              <span>محدودیت ها</span>
            </div>
            <div className="space-y-4">
              <p className="py-4 px-2 rounded-lg border-2 border-solid border-white">
                گهگاه اطلاعات نادرست تولید میکند
              </p>
              <p className="p-4 px-2 rounded-lg border-2 border-solid border-white">
                گهگاه دستورات اشتباه ارسال میکند
              </p>
              <p className="p-4 px-2 rounded-lg border-2 border-solid border-white">
                دانش محدود از جهان و رویدادهای پس از 2021
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Intro