import React from 'react'
import './skills.css'
import figma from './figma.png'
import ps from './photo.jpeg'
import ai from './ai3.jpeg'
import ae from './af2.jpeg'
import pr from './pr2.jpeg'
import xd from './xd2.jpeg'
function Skills() {
  return (
    <div>
      <div className='outer_skill'>
        <div className='inner_skill'>
            <div className='first_part'>
                My Skills
            </div>
            <div className='second_part'>
                We put your ideas and thus your wishes in the form of unique web project that inspire and your customer
            </div>
            <div className='third_part'>
                <div className='each_skill'>
                    <div className='first_part_of_each_skill'>
                        <div className='inner-img'><img src={figma} alt="" /></div>
                        <div className='percentage'>97%</div>
                    </div>
                    <div className='second_part_of_each_skill'>Figma</div>
                </div>
                <div className='each_skill'>
                    <div className='first_part_of_each_skill'>
                        <div className='inner-img'><img src={ps} alt="" /></div>
                        <div className='percentage'>97%</div>
                    </div>
                    <div className='second_part_of_each_skill'>PhotoShop</div>
                </div>
                <div className='each_skill'>
                    <div className='first_part_of_each_skill'>
                        <div className='inner-img'><img src={ai} alt="" /></div>
                        <div className='percentage'>96%</div>
                    </div>
                    <div className='second_part_of_each_skill'>Illustrator</div>
                </div>
                <div className='each_skill'>
                    <div className='first_part_of_each_skill'>
                        <div className='inner-img'><img src={ae} alt="" /></div>
                        <div className='percentage'>95%</div>
                    </div>
                    <div className='second_part_of_each_skill'>After Effect</div>
                </div>
                <div className='each_skill'>
                    <div className='first_part_of_each_skill'>
                        <div className='inner-img'><img src={pr} alt="" /></div>
                        <div className='percentage'>89%</div>
                    </div>
                    <div className='second_part_of_each_skill'>Premier Pro</div>
                </div>
                <div className='each_skill'>
                    <div className='first_part_of_each_skill'>
                        <div className='inner-img'><img src={xd} alt="" /></div>
                        <div className='percentage'>96%</div>
                    </div>
                    <div className='second_part_of_each_skill'>XD</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
