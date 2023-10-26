import {useState} from "react"
import Link from "next/link";



export default function UserInfo({info, setInfo, userInfoHandler}){
    

    const formIsValid = () =>{
        return(
        info.fullname &&
        info.country&&
        info.city&&
        info.zip&&
        info.phone.length =="10"
        )
      
    }

    return(
        <div className="text-[1.5rem] text-[#d7d7d7] bg-[#172b0d] rounded-lg w-full px-8 py-4">
            <form onSubmit={userInfoHandler}>
                <fieldset>
                    
                    <div className="field">
                        <label>Name:<span className="text-[red]">*</span>
                            <input type={"text"}
                            value={info.fullname}
                            onChange={(e) => setInfo({ ...info, fullname: e.target.value })}
                            placeholder="Name Surname"
                            />
                        </label>
                    </div>

                    <div className="field">
                        <label>Country:<span className="text-[red]">*</span>
                            <input type={"text"}
                            value={info.country}
                            onChange={(e) => setInfo({ ...info, country: e.target.value })}
                            placeholder="Country"
                            />
                        </label>
                    </div>

                    <div className="field">
                        <label>City:<span className="text-[red]">*</span>
                            <input type={"text"}
                            value={info.city}
                            onChange={(e) => setInfo({ ...info, city: e.target.value })}
                            placeholder="City"
                            />
                        </label>
                    </div>

                    <div className="field">
                        <label>Postal Code:<span className="text-[red]">*</span>
                            <input type={"text"}
                            value={info.zip}
                            onChange={(e) => setInfo({ ...info, zip: e.target.value })}
                            placeholder="Postal Code"
                            />
                        </label>
                    </div>


                    <div className="field">
                        <label>Phone Number:<span className="text-[red]">*</span>(with local code)
                            <input type={"tel"}
                            value={info.phone}
                            onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                            placeholder="xxx xxx xx xx"
                            />
                        </label>
                    </div>


                    <button type="submit" disabled={!formIsValid()}
                    className="mt-8 py-2 px-16 bg-[#172b0d] border-[2px] border-[#d5e8b8] rounded-lg">
                      {formIsValid() ? "Send" : "Fill the Form"}
                    </button>
                    
                </fieldset>
            </form>

        </div>
    );
};