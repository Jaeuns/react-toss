import { Button } from '~/components/ui/button';

interface Props {
  children?: React.ReactNode;
}

export default function NavButton({ children }: Props) {
  return (
    <Button
      variant="ghost"
      className="text-[rgb(78, 89, 104)] cursor-pointer text-[15px] leading-[1.5] font-[500] hover:text-[#318216]"
    >
      {children ?? ''}
    </Button>
  );
}
