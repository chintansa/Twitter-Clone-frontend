import owner from './data/profile.json';

const initialState = {
    profile: owner
};

const profile = (state = initialState, action) =>{
    switch(action.type){
        case 'save':
           
            if(action.newInput.name){
                initialState.profile['firstName'] = action.newInput['name'];
            }
            if(action.newInput.bio){
                initialState.profile['bio'] = action.newInput['bio'];
            }
            if(action.newInput.location){
                initialState.profile['location'] = action.newInput['location'];
            }
            if(action.newInput.dateOfBirth){
                initialState.profile['dateOfBirth'] =action.newInput['dateOfBirth'];
            }
            if(action.newInput.website){
                initialState.profile['website'] = action.newInput['website'];
            }

            console.log("reducer state");
            console.log(action.newInput)
            return {
                ...state,
                   
            };        
            default:
                return (state)
                    
                     
                
    }
}

export default profile;