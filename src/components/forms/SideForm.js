import '../../styles/side-sections.css'
import LoginForm from './LoginForm'
import EditCompaignForm from './EditCompaignForm'
import EditProductForm from './EditProductForm'
import AddCompaignForm from './AddCompaignForm'
import AddProductForm from './AddProductForm'

export default function SideForm(props) {
    return (
    <div className="side-panel">
        { 
            props.selectedForm === 1 ?   <LoginForm setUser={props.setUser}     
                                                    setLoggedIn={props.setLoggedIn}
                                                    setForm = {props.setForm} />:

            props.selectedForm === 2 ?   <EditCompaignForm  Campaigns_db = {props.Campaigns_db} 
                                                            setCampaigns_db={props.setCampaigns_db} 
                                                            ID = {props.activeID}
                                                            setForm = {props.setForm} />:

            props.selectedForm === 3 ?   <EditProductForm   Products_db = {props.Products_db}   
                                                            setProducts_db={props.setProducts_db}
                                                            ID = {props.activeID}
                                                            setForm = {props.setForm} />:

            props.selectedForm === 4 ?   <AddCompaignForm   Campaigns_db = {props.Campaigns_db} 
                                                            setCampaigns_db={props.setCampaigns_db}
                                                            setForm = {props.setForm}/> :

            props.selectedForm === 5 ?   <AddProductForm    Products_db={props.Products_db}
                                                            setProducts_db={props.setProducts_db}
                                                            setForm = {props.setForm}/> :
            <div id='blank-form'> </div>
        }
    </div>        
)}    
