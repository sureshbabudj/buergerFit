export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props} className={className}>
      <path d="M 25.188 0.166 C 11.632 0.166 0.63 11.167 0.63 24.723 C 0.63 38.279 11.632 49.281 25.188 49.281 C 38.743 49.281 49.745 38.279 49.745 24.723 C 49.745 11.167 38.743 0.166 25.188 0.166 Z M 39.922 32.09 L 27.643 32.09 L 25.188 27.179 L 19.048 27.179 L 19.048 39.458 L 15.365 39.458 L 15.365 12.444 L 30.099 12.444 L 32.555 17.356 L 39.922 17.356 L 39.922 32.09 Z"></path>
    </svg>
  );
}
