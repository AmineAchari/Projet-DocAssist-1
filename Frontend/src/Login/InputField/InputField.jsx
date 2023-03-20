import './InputField.css'
import React from 'react'

class InputField extends React.Component {
  render() {
    return (

      // <div className='inputField'>
      //     <input
      //       className=' '
      //       type={this.props.type}
      //       placeholder={this.props.placeholder}
      //       value={this.props.value}
      //       onChange={(e) => this.props.onChange(e.target.value)}
      //       />
      // </div>


      <div class="relative mb-3 xl:w-96" data-te-input-wrapper-init>
        <input
          type={this.props.type}
          class="peer block min-h-[auto]  border-0  w-80 rounded-full leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="input"
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={(e) => this.props.onChange(e.target.value)} />
            <label
              for="input"
              class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
            >
            </label>
    </div>


    )
  }
}

export default InputField