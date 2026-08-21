import React from 'react';
import * as Icons from 'lucide-react';
import { Github, Linkedin, LeetCode, CodeChef } from './BrandIcons';

export const IconResolver = ({ name, className = "w-5 h-5", defaultIcon = "Code" }) => {
  if (name === 'Github' || name === 'GitHub') return <Github className={className} />;
  if (name === 'Linkedin' || name === 'LinkedIn') return <Linkedin className={className} />;
  if (name === 'LeetCode') return <LeetCode className={className} />;
  if (name === 'CodeChef') return <CodeChef className={className} />;

  const IconComponent = Icons[name] || Icons[defaultIcon] || Icons.Code;
  return <IconComponent className={className} />;
};
