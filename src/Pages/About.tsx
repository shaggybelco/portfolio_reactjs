import React from 'react'

export default function About() {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='py-10'>
                    <hr className='w-48 border-t-8 pb-8' />
                    <h1 className='text-4xl black-ops'>About me</h1>

                    <p>As a passionate Full Stack Developer, I excel in constructing and
                        maintaining web applications. My proficiency extends across various front-end and back-end technologies,
                        encompassing multiple programming languages, databases, and development frameworks.
                    </p>

                    <div className='py-20 flex flex-col md:flex-row md:gap-0 gap-5'>
                        <div className='flex-1'>
                            <hr className='w-48 border-t-8 pb-8' />
                            <h2 className='text-4xl black-ops'>Service I offer</h2>
                        </div>
                        <div className='flex-1'>
                            <div className='flex items-center gap-3'>
                                <h1 className='black-ops text-3xl min-w-min'>01</h1>
                                <h3 className='min-w-min black-ops'>Strategy</h3>
                            </div>
                            <p>Before jumping into designing I always make sure that i ask the right questions and then try to accomplish the right challenges. This stage includes market research, competitive analyses, consulting and exploring possible solutions.
                            </p>
                            <hr className='border-t-2 my-5' />

                            <div className='flex items-center gap-3'>
                                <h1 className='black-ops text-3xl min-w-min'>02</h1>
                                <h3 className='min-w-min black-ops'>Design</h3>
                            </div>
                            <p>At the end of this phase you’ll have a pixel perfect design for your app or website. During the transition from wireframes into the final design I create prototypes simulating final end results before development.
                            </p>
                            <hr className='border-t-2 my-5' />

                            <div className='flex items-center gap-3'>
                                <h1 className='black-ops text-3xl min-w-min'>03</h1>
                                <h3 className='min-w-min black-ops'>Development</h3>
                            </div>
                            <p>Being able to build the designs I produce means I can bring your idea to life. It also means I don't design anything that can't technically be created.
                            </p>
                            <hr className='border-t-2 my-5' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
