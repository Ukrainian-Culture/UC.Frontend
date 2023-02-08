import React from 'react'
import "../adminArticles/adminArticles.scss"
import styled from "styled-components";
function AdminArticles() {
    const Button = styled.button``
    return (
    <div className='AdminArticles_Section'>
        <div className='articleIdWrap'>
        <div className='articleIdText'><span>article id</span></div>
        <div className='articleId'>
            <div>
                <input type="text"/>
            </div>
             <div>
              <Button >search</Button>
             </div>
        </div>
        </div>
        <div className='mainWrap'>
            <div className='leftWrap'>
            <div className='tittleWrap'>
                <div className='tittleText'><span>tittle</span></div>
                <textarea className="tittleArea"></textarea>
            </div>
            <div className='shortDescriptionWrap'>
                <div className='shortDescriptionText'><span>shortDescription</span></div>
                <textarea className="shortDescriptionArea"></textarea>
            </div>
            </div>
            <div className='subtextWrap'>
                <div className='subtextText'><span>subText</span></div>
                <textarea className="subtextArea"></textarea>
            </div>
        </div>
        <div className='contentWrap'>
            <div className='contentText'><span>content</span></div>
            <textarea className="contentArea"></textarea>
        </div>
    </div>
  )
}

export default AdminArticles
