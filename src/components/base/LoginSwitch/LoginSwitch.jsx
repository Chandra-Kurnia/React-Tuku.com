import React from 'react'
import '../../../css/auth.css'
import '../../../css/global.css'

export const LoginSwitch = (props) => {
    return (
        <div className="mt-5 mb-4">
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="roles" id="btnradio1" autocomplete="off" value="customer" onClick={e => props.switch(e)}></input>
                    <label class="radio-label btn switch-auth" for="btnradio1">Custommer</label>
                    <input type="radio" class="btn-check" name="roles" id="btnradio3" autocomplete="off" value="seller" onClick={e => props.switch(e)} checked></input>
                    <label class="radio-label btn switch-auth" for="btnradio3">Seller</label>
                </div>
        </div>
    )
}
