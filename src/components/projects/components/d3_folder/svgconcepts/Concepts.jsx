import './concepts.css'

const Code = () => {
  return (
    <div className='concepts-container'>
      <div>
        <p>normal svg</p>
        <svg className='normal' height='200' width='200'></svg>
      </div>
      <div>
        <p>circle</p>
        <svg className='circle' width='200' height='200'>
          <circle r='50' cx='100' cy='100' />
        </svg>
      </div>
      <div>
        <p>rectangle</p>
        <svg className='rectangle' width='200' height='200'>
          <rect width='150' height='100' x='25' y='50' />
          <rect
            className='second-rect'
            width='75'
            height='50'
            x='62.5'
            y='75'
            rx='15'
            ry='15'
          />
        </svg>
      </div>
      <div>
        <p>square</p>
        <svg className='square' width='200' height='200'>
          <rect width='100' height='100' x='50' y='50'></rect>
        </svg>
      </div>
      <div>
        <p>ellipse</p>
        <svg className='ellipse' width='200' height='200'>
          <ellipse rx='85' ry='55' cx='100' cy='100'></ellipse>
        </svg>
      </div>
      <div>
        <p>line</p>
        <svg className='line' width='200' height='200'>
          <line x1='15' y1='50' x2='190' y2='180' />
        </svg>
      </div>
      <div>
        <p>triangle</p>
        <svg className='triangle' width='200' height='200'>
          <polygon points='10,190 100,10 190,190' />
        </svg>
      </div>
      <div>
        <p>pentagon</p>
        <svg className='pentagon' width='200' height='200'>
          <polygon points='100,60 150,100 125,150 75,150 50,100' />
        </svg>
      </div>
      <div>
        <p>star</p>
        <svg className='star' width='200' height='200'>
          <polygon points='100,10 40,198 190,78 10,78 160,198' />
        </svg>
      </div>
      <div>
        <p>poly line</p>
        <svg className='poly-line' width='200' height='200'>
          <polyline points='0,3 30,3 30,30 60,30 60,60 90,60 90,90 120,90'></polyline>
        </svg>
      </div>
      <div>
        <p>text element</p>
        <svg className='text-element' width='200' height='200'>
          <text x='6' y='16'>
            D3 is awesome!
          </text>
          <text x='12' y='32'>
            but learning it is heard
          </text>
          <text x='18' y='48'>
            15 mins everydays
          </text>
        </svg>
      </div>
      <div>
        {/* The most complex element in SVG. The following commands are available for path data:
      M = moveto
      L = lineto
      H = horizontal lineto
      V = vertical lineto
      C = curveto
      S = smooth curveto
      Q = quadratic Bézier curve
      T = smooth quadratic Bézier curveto
      A = elliptical Arc
      Z = closepath
      Note: All of the commands above can also be expressed with lower letters. Capital letters means absolutely positioned, lower cases means relatively positioned.
     */}
        <p>path</p>
        <svg className='path' width='200' height='200'>
          <path d='M120,80 C50,150 25,130 50,80 Z' />
        </svg>
      </div>
      <div>
        <p>transform</p>
        <svg className='transform' width='200' height='200'>
          <rect className='one' width='50' height='100' x='75' y='50' />
          <rect className='two' width='50' height='100' x='75' y='50' />
          <rect className='three' width='50' height='100' x='75' y='50' />
        </svg>
      </div>
      <div>
        <p>group g is like div</p>
        <svg className='group' width='200' height='200'>
          <g>
            <rect width='150' height='50' x='25' y='25' />
            <rect width='100' height='70' x='50' y='50' />
          </g>
        </svg>
      </div>
      <div>
        <p>viewport: origin and zoom</p>
        <svg className='viewport' width='200' height='200'>
          <rect width='50' height='100' x='25' y='25' />
        </svg>
      </div>
      <div>
        <p>Bar Chart</p>
        <svg className='bar-chart' width='200' height='200'>
          <line x1='0' y1='0' x2='0' y2='200' />
          <line x1='0' y1='200' x2='200' y2='200' />
          <rect width='75' height='25' x='5' y='12.5' />
          <text x='15' y='30'>
            A - 75
          </text>
          <rect width='100' height='25' x='5' y='62.5' />
          <text x='15' y='80'>
            B - 100
          </text>
          <rect width='125' height='25' x='5' y='112.5' />
          <text x='15' y='130'>
            C - 125
          </text>
          <rect width='150' height='25' x='5' y='162.5' />
          <text x='15' y='180'>
            D - 150
          </text>
        </svg>
      </div>
    </div>
  )
}
export default Code
