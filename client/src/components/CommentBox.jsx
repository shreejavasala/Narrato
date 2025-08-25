import React from 'react'

const CommentBox = ({ name, setName, content, setContent, addComment }) => {
  return (
    <div className='max-w-3xl mx-auto'>
          <p className='font-semi-bold mb-4'>Add your comment</p>
          <form 
            onSubmit={addComment}
            className='flex flex-col items-start gap-4 max-w-lg'>
            <input 
              type="text" 
              placeholder='Name' 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className='w-full p-2 border border-gray-300 rounded outline-none'/>
              <textarea 
                placeholder='Comment'
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded outline-none h-48'>
              </textarea>
              <button 
                type="submit"
                className='bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer'>Submit</button>
          </form>
        </div>

  )
}

export default CommentBox