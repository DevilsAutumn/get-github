import { ChangeEvent } from 'react';

export interface SearchInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClick: () => void;
}
