import React from 'react'
import '../mailing/Mailing.scss'
import styled from "styled-components";

function Mailing(){
    const Button = styled.button``
    return(
        <div className='Mailing_Section'>
        <div className='Mailing_Wrap'>
            <div className='Mail_Wrap'>
                <div className='to'>
                    <div className='toText'>
                        <span>To</span>
                    </div>
                    <form>
                        <input type="text" placeholder='Bcc' className='inputBcc' />

                    </form>
                </div>
                <div className='Subject'>
                    <div className='subjectText'>
                        <span>Subject</span>
                    </div>
                    <div>
                        <input type="text"/>
                    </div>
                </div>
                <div className='bodyWrap'>
                    <div className='Body'>
                        <div className='bodyText'>
                            <span>Body</span>
                        </div>
                        <div>
                            <textarea></textarea>
                        </div>
                    </div>
                    <div className='Attachments'>
                        <div className='attachmentsText'>
                            <span>Add attachments</span>
                        </div>
                        <div className='attachments'>
                            <div className='but'><Button>+</Button></div>
                        </div>
                        <div className='button'>
                            <Button>Send</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Mailing