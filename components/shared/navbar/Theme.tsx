import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { themes } from '@/constants';
import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';
const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map(({ value, Icon, label }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => {
              setMode(value);
              if (value !== 'system') {
                localStorage.theme = value;
              } else {
                localStorage.removeItem('theme');
              }
            }}
          >
            <div className="flex items-center space-x-2">
              <Icon />
              <p>{label}</p>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default Theme;
