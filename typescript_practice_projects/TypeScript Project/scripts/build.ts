#!/usr/bin/env node

import { execSync } from 'child_process';
import { join } from 'path';

const projectRoot = join(__dirname, '..');

try {
  console.log('Building TypeScript project with references...');
  
  // Build all projects in the correct order
  execSync('tsc --build', { cwd: projectRoot, stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}