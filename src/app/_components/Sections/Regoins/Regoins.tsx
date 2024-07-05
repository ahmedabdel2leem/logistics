import style from './regooins.module.css'
import img from '@/assets/Group 27.svg'
import ConnecteingShape from '../../common/ConnecteingShape/ConnecteingShape';

type Props = {

}

function Regoins({ }: Props) {

    return (
        <div className={`${style.regoins} flex items-end pb-20 md:pb-0`}>
            <div className='shape  '>
                <ConnecteingShape />
            </div>
            <div className='details  sm:max-w-[500px] mt-20 sm:mb-32 text-center sm:text-start  sm:ms-32  space-y-20  '>
                <div className="regoinsHeader space-y-10">
                    <h3 className='text-7xl text-sky-500 '>8 Regions</h3>
                    <h4 className='text-5xl text-white leading-tight'>of the kingdom fall under our coverage</h4>
                    <p className='text-base text-white'>  Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea parturient phasellus aliquam. Gravida amet leo quis nam nibh.</p>
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