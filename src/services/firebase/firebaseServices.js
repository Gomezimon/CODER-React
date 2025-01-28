
import { getFirestore, doc, runTransaction } from "firebase/firestore";

export const updateStock = async (itemId, quantityPurchased) => {
    const db = getFirestore();
    const itemRef  = doc(db, "Items", itemId);

    try {
        await runTransaction(db, async (transaction) => {
            const productDoc = await transaction.get(itemRef);

            if (!productDoc.exists()) {
                throw new Error("El producto no existe!");
            }

            const currentStock = productDoc.data().stock;
            const newStock = currentStock - quantityPurchased;

            if (newStock < 0) {
                throw new Error("No hay suficiente stock disponible!");
            }

            transaction.update(itemRef, { stock: newStock });
        });
        console.log("Stock actualizado correctamente!");
    } catch (error) {
        console.error("Error al actualizar el stock: ", error);
    }
};
