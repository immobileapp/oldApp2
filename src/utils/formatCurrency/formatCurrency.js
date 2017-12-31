export default function formatCurrency(price) {
	return `R$ ${ price.toFixed(2) }`
}