import { Modal } from "antd";
import { useContext } from "react";
import { StoreContext } from "../store"

export default function CartModal({isModalVisible, toggleModal}) {
   const { state } = useContext(StoreContext);
   const { cartItems } = state;

   const showModal = () => {
      toggleModal(true);
   };
 
   const handleOk = () => {
      toggleModal(false);
   };
 
   const handleCancel = () => {
      toggleModal(false);
   };   
   
   return (
      <Modal 
         title="Shopping Bag" 
         visible={isModalVisible} 
         onOk={handleOk} 
         onCancel={handleCancel}
         okText="Checkout Now"
         cancelText="Still Shopping"
      >
         {cartItems.map(item=><p>{item.name} x {item.qty}</p>)}
      </Modal>
   );
}