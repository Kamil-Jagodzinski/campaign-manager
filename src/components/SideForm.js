import './side-sections.css'
import LoginForm from './forms/LoginForm'
import EditCompaignForm from './forms/EditCompaignForm'
import EditProductForm from './forms/EditProductForm'
import AddCompaignForm from './forms/AddCompaignForm'
import AddProductForm from './forms/AddCompaignForm'

export default function SideForm(props) {
    return (
    <div className="side-panel">
        { 
            props.selectedForm === 1 ?   <LoginForm setUser={props.setUser}     setLoggedIn={props.setLoggedIn}
                                                    setForm = {props.setForm} />:
            props.selectedForm === 2 ?   <EditCompaignForm  Campaigns_db = {props.Campaigns_db} 
                                                            setCampaigns_db={props.setCampaigns_db} 
                                                            ID = {props.activeID} />:
            props.selectedForm === 3 ?   <EditProductForm   Products_db = {props.Products_db}   
                                                            setProducts_db={props.setProducts_db}
                                                            ID = {props.activeID} />:
            props.selectedForm === 4 ?   <AddCompaignForm   setCampaigns_db={props.setCampaigns_db}/> :
            props.selectedForm === 5 ?   <AddProductForm    setProducts_db={props.setProducts_db}/> :
            <div id='blank-form'> </div>
        }
    </div>        
)}    
