

export default {
  bgColor: "184, 255, 129",
  classes: "spans-black text-black",
  title: "Bundles",
  html: `
    <p>Cannot be destructured by pattern matching</p>
    <div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Can read</th>
          <th>Can write</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span>bundle-{proc}</span></td>
          <td>YES</td>
          <td>NO</td>
        </tr>
        <tr>
          <td><span>bundle+{proc}</span></td>
          <td>NO</td>
          <td>YES</td>
        </tr>
        <tr>
          <td><span>bundle0{proc}</span></td>
          <td>NO</td>
          <td>NO</td>
        </tr>
        <tr>
          <td><span>bundle{proc}</span></td>
          <td>YES</td>
          <td>YES</td>
        </tr>
      </tbody>
    </table>
    </div>
  `,
}