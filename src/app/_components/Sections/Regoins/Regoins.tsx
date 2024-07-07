import style from './regooins.module.css'
import img from '@/assets/Group 27.svg'
import ConnecteingShape from '../../common/ConnecteingShape/ConnecteingShape';

type Props = {

}

function Regoins({ }: Props) {

    return (
        <div className={`${style.regoins} flex items-end md:items-center   md:pt-36 pb-24  `}>
            <div className='shape  '>
                <ConnecteingShape />
            </div>
            <div className='details  sm:max-w-[520px] mt-20 sm:mb-32 text-center sm:text-start  sm:ms-32  space-y-14  '>
                <div className="regoinsHeader space-y-7">
                    <h3 className='text-6xl  font-nova font-semibold text-sky-300 '>8 Regions</h3>
                    <h4 className='text-5xl text-white leading-tight font-nova font-light'>of the kingdom fall <br /> under our coverage</h4>
                    <p className=' text-white font-nova text-lg font-light'>Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea parturient phasellus aliquam. Gravida amet leo quis nam nibh.</p>
                </div>
                <div className='citys  w-full sm:w-72 space-y-4 flex flex-col items-center sm:items-start'>
                    <div className='inline-flex space-x-4  '>
                        <div className='customTags'>Riyadh</div>
                        <div className='customTags'>Jeddah</div>
                    </div>
                    <div className='inline-flex space-x-4'>
                        <div className='customTags'>Dammam</div>
                        <div className='customTags'>Madinah</div>
                    </div>
                    <div className='inline-flex space-x-4'>
                        <div className='customTags'>Al Qassem</div>
                        <div className='customTags'>Sakaka</div>
                    </div>
                    <div className='inline-flex space-x-4'>
                        <div className='customTags'>Khamis Mushiat</div>
                        <div className='customTags'>Tabuk</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Regoins