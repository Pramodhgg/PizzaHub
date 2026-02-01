import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="h-30 mt-5 flex flex-col overflow-hidden px-4 py-3 text-center">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas 🍕😉.
      </p>
    </div>
  );
}

export default EmptyCart;
