export const DnaGraphic = () => (
  <svg viewBox="0 0 200 100" className="w-full h-full opacity-80">
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,2; 0,-2; 0,2" dur="4s" repeatCount="indefinite" />
      <path d="M20,50 Q40,20 60,50 T100,50 T140,50 T180,50" fill="none" stroke="#8ebc83" strokeWidth="3" strokeDasharray="5,5" />
      <path d="M20,50 Q40,80 60,50 T100,50 T140,50 T180,50" fill="none" stroke="#8ebc83" strokeWidth="3" strokeDasharray="5,5" className="opacity-50" />
      {[20, 40, 60, 80, 100, 120, 140, 160, 180].map((x, i) => (
        <line key={i} x1={x} y1="35" x2={x} y2="65" stroke="#8ebc83" strokeWidth="2">
          <animate attributeName="y1" values="35; 42; 35" dur={`${2 + i * 0.1}s`} repeatCount="indefinite" />
          <animate attributeName="y2" values="65; 58; 65" dur={`${2 + i * 0.1}s`} repeatCount="indefinite" />
        </line>
      ))}
    </g>
  </svg>
);

export const CreditGraphic = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24">
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,4; 0,-4; 0,4" dur="3s" repeatCount="indefinite" />
      <circle cx="50" cy="50" r="45" fill="none" stroke="#8ebc83" strokeWidth="2" strokeDasharray="10,5">
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="15s" repeatCount="indefinite" />
      </circle>
      <text x="50" y="65" textAnchor="middle" fontSize="40" fill="#8ebc83" fontWeight="bold" className="font-sans">$</text>
      <path d="M50,15 L50,85" stroke="#8ebc83" strokeWidth="4" strokeLinecap="round" />
    </g>
  </svg>
);

export const VisionGraphic = () => (
  <svg viewBox="0 0 100 100" className="w-24 h-24">
    <g>
      <animateTransform attributeName="transform" type="scale" values="0.95; 1.05; 0.95" dur="4s" repeatCount="indefinite" style={{ transformOrigin: "50px 50px" }} />
      <rect x="20" y="20" width="60" height="60" fill="none" stroke="#8ebc83" strokeWidth="2" strokeDasharray="5,5">
        <animate attributeName="stroke-dashoffset" values="0; 20" dur="2s" repeatCount="indefinite" />
      </rect>
      <circle cx="50" cy="50" r="15" fill="none" stroke="#8ebc83" strokeWidth="3" />
      <circle cx="50" cy="50" r="5" fill="#8ebc83">
        <animate attributeName="r" values="4; 6; 4" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M10,20 L20,20 M10,20 L10,30" fill="none" stroke="#8ebc83" strokeWidth="3" />
      <path d="M90,20 L80,20 M90,20 L90,30" fill="none" stroke="#8ebc83" strokeWidth="3" />
      <path d="M10,80 L20,80 M10,80 L10,70" fill="none" stroke="#8ebc83" strokeWidth="3" />
      <path d="M90,80 L80,80 M90,80 L90,70" fill="none" stroke="#8ebc83" strokeWidth="3" />
    </g>
  </svg>
);